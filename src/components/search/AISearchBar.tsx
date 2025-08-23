import { useState, useRef, useEffect } from "react";
import { Search, Loader2, ThumbsUp, ThumbsDown, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from 'react-markdown';

interface SearchResult {
  answer: string;
  sources: Array<{
    title: string;
    url: string;
    snippet: string;
  }>;
  confidence: number;
}

const EXAMPLE_QUERIES = [
  "What is the UN Security Council?",
  "Latest UN statements on climate change",
  "How to draft a MUN resolution?",
  "What are the functions of the ICJ?",
  "India's position on global diplomacy"
];

const AISearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setResult(null);
    setFeedback(null);

    try {
      const { data, error } = await supabase.functions.invoke('ai-search', {
        body: { query: searchQuery }
      });

      if (error) {
        throw new Error(error.message || 'Search failed');
      }

      setResult(data);
      
      // Log the query for analytics
      await logQuery(searchQuery, data);
      
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search Error",
        description: "Unable to process your search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const logQuery = async (query: string, result: SearchResult) => {
    try {
      await supabase.functions.invoke('analytics-logger/log-query', {
        body: {
          query,
          confidence: result.confidence,
          timestamp: new Date().toISOString(),
        }
      });
    } catch (error) {
      console.error('Failed to log query:', error);
    }
  };

  const handleFeedback = async (type: 'up' | 'down') => {
    if (!result) return;
    
    setFeedback(type);
    
    try {
      await supabase.functions.invoke('analytics-logger/feedback', {
        body: {
          query,
          feedback: type,
          timestamp: new Date().toISOString(),
        }
      });
      
      toast({
        title: "Thank you!",
        description: "Your feedback helps improve our AI search.",
      });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  const handleExampleQuery = (exampleQuery: string) => {
    setQuery(exampleQuery);
    setShowSuggestions(false);
    // Focus on input to show the query was set
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Trigger search automatically
    handleSearch(exampleQuery);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 transition-colors group-focus-within:text-primary" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Ask anything about MUN, UN, or international affairs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            onFocus={() => {
              setShowSuggestions(true);
              // Ensure input stays visible when suggestions open on mobile
              setTimeout(() => inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
            }}
            className="pl-12 pr-24 h-14 sm:h-16 text-base sm:text-lg font-inter bg-black/80 border border-primary/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-white placeholder:text-white/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-black/90 focus:bg-black/90 w-full"
            style={{ fontSize: '16px' }}
          />
          <Button
            onClick={() => handleSearch()}
            disabled={isSearching || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 sm:h-12 px-3 sm:px-6 bg-primary hover:bg-primary/90 text-white font-inter font-medium transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(26,47,251,0.4)] active:scale-95 text-sm sm:text-base"
          >
            {isSearching ? (
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            ) : (
              <span className="hidden sm:inline">Search</span>
            )}
            {isSearching ? null : <Search className="w-4 h-4 sm:hidden" />}
          </Button>
        </div>

        {/* Enhanced Example Queries */}
        {showSuggestions && !result && (
          <Card className="absolute top-full mt-2 w-full z-[999] bg-black/95 border-primary/30 backdrop-blur-lg animate-fade-in shadow-2xl shadow-primary/10">
            <CardContent className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto overscroll-contain pr-1">
              <div className="flex items-center mb-4">
                <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
                <p className="text-sm sm:text-base text-white/70 font-inter font-medium">Popular questions to get you started:</p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {EXAMPLE_QUERIES.map((example, index) => (
                  <button
                    key={index}
                    onMouseDown={(e) => { e.preventDefault(); handleExampleQuery(example); }}
                    className="group flex items-center w-full text-left p-3 sm:p-4 rounded-xl hover:bg-primary/10 text-sm sm:text-base transition-all duration-300 text-white/80 hover:text-white font-inter hover:shadow-[0_0_15px_rgba(26,47,251,0.2)] active:scale-[0.98] border border-transparent hover:border-primary/20 bg-white/5"
                  >
                    <Search className="w-4 h-4 mr-3 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="flex-1 leading-relaxed">{example}</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-white/40 font-inter text-center">
                  Click any suggestion to search instantly
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Enhanced Search Results */}
      {result && (
        <Card className="bg-black/90 border-primary/30 backdrop-blur-lg animate-fade-in shadow-2xl shadow-primary/5">
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              {/* Answer */}
              <div className="ai-response-bubble">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-inter">AI Response</h3>
                  <Badge 
                    variant={result.confidence > 0.8 ? "default" : "secondary"}
                    className={`${result.confidence > 0.8 ? 'bg-primary text-white' : 'bg-white/10 text-white/80'} font-inter font-medium`}
                  >
                    {Math.round(result.confidence * 100)}% confidence
                  </Badge>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 sm:p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,47,251,0.1)]">
                  <div className="text-white font-inter leading-relaxed prose prose-invert max-w-none
                    prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h5:text-white prose-h6:text-white
                    prose-p:text-white prose-strong:text-white prose-em:text-white/90
                    prose-ul:text-white prose-ol:text-white prose-li:text-white
                    prose-blockquote:text-white/90 prose-blockquote:border-l-primary
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-pre:bg-black/40 prose-pre:border prose-pre:border-primary/20
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    [&>*]:text-base [&>*]:md:text-lg
                    [&>h1]:text-2xl [&>h1]:md:text-3xl [&>h1]:font-bold
                    [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold
                    [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:font-semibold
                    [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4
                    [&>li]:mb-1"
                  >
                    <ReactMarkdown>
                      {result.answer}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              {/* Sources */}
              {result.sources && result.sources.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 font-inter">Sources</h4>
                  <div className="space-y-3">
                     {result.sources.map((source, index) => (
                       <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                         <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                           <div className="flex-1 min-w-0">
                             <h5 className="font-semibold text-white font-inter mb-2 text-sm sm:text-base line-clamp-2">{source.title}</h5>
                             <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-inter line-clamp-3">{source.snippet}</p>
                           </div>
                           <Button
                             variant="ghost"
                             size="sm"
                             asChild
                             className="self-start sm:ml-3 text-primary hover:text-white hover:bg-primary/20 transition-all duration-300 rounded-lg min-h-8 min-w-8 flex-shrink-0"
                           >
                             <a 
                               href={source.url} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="Open source link"
                             >
                               <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                             </a>
                           </Button>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/60 font-inter text-center sm:text-left">Was this answer helpful?</p>
                <div className="flex justify-center sm:justify-end space-x-3">
                  <Button
                    variant={feedback === 'up' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFeedback('up')}
                    className={`${feedback === 'up' 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white'
                    } transition-all duration-300 rounded-lg min-h-10 active:scale-95`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={feedback === 'down' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFeedback('down')}
                    className={`${feedback === 'down' 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white'
                    } transition-all duration-300 rounded-lg min-h-10 active:scale-95`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Privacy Notice */}
      <p className="text-xs text-white/40 text-center font-inter leading-relaxed">
        Your queries are used to improve our AI search experience. 
        <a href="/privacy" className="text-primary hover:text-primary/80 hover:underline ml-1 transition-colors duration-300">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default AISearchBar;