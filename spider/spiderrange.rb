class SpiderRange
    attr_reader :origin,:low,:high,:fix,:srange
    def initialize (str)
        @origin = str
        parserange
    end

    def parserange
        return  unless @origin
        rep0 = /(\d+)\s*-\s*(\d+)/
        rep1 = /(\d+)/
        rep = Regexp.union(rep0,rep1)
        mch = @origin.match(rep)
        if mch
            @low = mch[1]
            @high = mch[2]
            @fix = mch[3]
            @srange = Range.new(@low,@high,exclude_end=false) if @low
            @srange = Range.new(@fix,@fix,exclude_end=false) if @fix
        else
            @low = nil
            @high = nil
            @fix = nil
            @srange = nil
        end

    end

    def sr_hash(hask_key)
        category_hash = {}
        category_hash[hask_key.to_sym] = @origin
        category_hash[(hask_key.to_s + '_low').to_sym]  = @low
        category_hash[(hask_key.to_s + '_high').to_sym] = @high
        category_hash[(hask_key.to_s + '_fix').to_sym]  = @fix
        category_hash
    end

end
