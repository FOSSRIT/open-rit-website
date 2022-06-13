# credit: http://acegik.net/blog/ruby/jekyll/plugins/howto-nest-liquid-template-variables-inside-yaml-front-matter-block.html
# modified to ignore non-templated content

module Jekyll
	module ExpandNestedVariableFilter
		def flatify(input)
			text = input.to_s
			if text.match?(/\{\{(.*?)\}\}/)
				return Liquid::Template.parse(input).render(@context)
			end
			return text
		end
	end
end

Liquid::Template.register_filter(Jekyll::ExpandNestedVariableFilter)
