"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[577],{5530:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/blog/tags/facebook"},{"label":"hello","permalink":"/blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"nextItem":{"title":"MDX Blog Post","permalink":"/blog/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"prevItem":{"title":"Welcome","permalink":"/blog/blog/welcome"},"nextItem":{"title":"\u79d1\u5b66\u4e0a\u7f51","permalink":"/blog/blog/2021/01/02/\u79d1\u5b66\u4e0a\u7f51"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"/2021/01/02/\u79d1\u5b66\u4e0a\u7f51","metadata":{"permalink":"/blog/blog/2021/01/02/\u79d1\u5b66\u4e0a\u7f51","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-02-\u79d1\u5b66\u4e0a\u7f51.md","source":"@site/blog/2021-01-02-\u79d1\u5b66\u4e0a\u7f51.md","title":"\u79d1\u5b66\u4e0a\u7f51","description":"title: Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51","date":"2021-01-02T00:00:00.000Z","formattedDate":"January 2, 2021","tags":[],"readingTime":0.975,"truncated":false,"authors":[],"prevItem":{"title":"MDX Blog Post","permalink":"/blog/blog/mdx-blog-post"},"nextItem":{"title":"Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51","permalink":"/blog/blog/2021/01/01/Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51"}},"content":"title: Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51\\ndate: 2019-10-13 10:25:31\\n---\\n[TOC]\\n\\n\x3c!-- toc --\x3e\\n\\n# Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51\\n\\n## \u5b89\u88c5shadowsocks-qt5\\n\\n````\\nsudo add-apt-repository ppa:hzwhuang/ss-qt5\\n````\\n\\n\u7f16\u8f91`/etc/apt/sources.list.d/hzwhuang-ubuntu-ss-qt5-bionic.list` \u6587\u4ef6\uff0c\u5c06`bionic `(18.04\u7248\u672c\u4ee3\u53f7)\u6539\u6210`xenial`\uff0816.04\u7248\u672c\u4ee3\u53f7\uff09\\n\\n\u56e0\u4e3ashadowsocks-qt5 \u73b0\u5728\u8fd8\u6ca1\u6709\u63d0\u4f9bUbutnu18 \u8fd9\u4e2a\u7248\u672c\u7684\u5ba2\u6237\u7aef\uff0c\u4fee\u6539\u6e90\u6765\u5b89\u88c5\\n\\n```\\nsudo apt-get update\\nsudo apt-get install shadowsocks-qt5 \\n```\\n\\n\\n\\n## \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\\n\\n### \u706b\u72d0\u6d4f\u89c8\u5668\\n\\nfirefox-\u8bbe\u7f6e-\u7f51\u7edc\u4ee3\u7406-\u8bbe\u7f6e\u5982\u4e0b\\n\\n\u4fee\u6539\u4e3a\uff1a\u624b\u52a8\u914d\u7f6e\u4ee3\u7406\uff1aSOCKS\u4e3b\u673a\uff1a127.0.0.1\uff0c\u7aef\u53e3\uff1a1080\u3002\u4f7f\u7528SOCKS v5\u65b9\u5f0f\\n\\n\\n\\n### \u8c37\u6b4c\u6d4f\u89c8\u5668\\n\\n\u4f7f\u7528[proxy Switchsharp](https://www.switchysharp.com/file/switchysharp-v1.10.4.zip)\u63d2\u4ef6\uff0c\u8bbe\u7f6e\u706b\u72d0\u6d4f\u89c8\u5668\u7c7b\u4f3c\u3002\\n\\n**\u8fd9\u91cc\u6709\u4e00\u70b9\u8981\u6ce8\u610f\uff0c\u8981\u5728\u63d2\u4ef6\uff0c\u4e5f\u5c31\u662f\u6d4f\u89c8\u5668\u5de6\u4e0a\u89d2\u7684\u5c0f\u5730\u7403\u56fe\u6807\u4e0a\u70b9\u51fb\u2014\u2014\u8bbe\u7f6e\u8fde\u63a5\uff0c\u5426\u5219\u662f\u4e0d\u8fdb\u884c\u4ee3\u7406\u7684**"},{"id":"/2021/01/01/Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51","metadata":{"permalink":"/blog/blog/2021/01/01/Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-01-Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51.md","source":"@site/blog/2021-01-01-Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51.md","title":"Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51","description":"title: Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51","date":"2021-01-01T00:00:00.000Z","formattedDate":"January 1, 2021","tags":[],"readingTime":1.045,"truncated":false,"authors":[],"prevItem":{"title":"\u79d1\u5b66\u4e0a\u7f51","permalink":"/blog/blog/2021/01/02/\u79d1\u5b66\u4e0a\u7f51"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/blog/long-blog-post"}},"content":"title: Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51\\nauthor: John Doe\\ntags:\\n  - \u79d1\u5b66\u4e0a\u7f51\\n  - Ubuntu\\ncategories:\\n  - \u5de5\u5177\\ndate: 2019-10-13 10:27:00\\n---\\n[TOC]\\n\\n\x3c!-- toc --\x3e\\n\\n# Ubuntu18.04 \u4f7f\u7528Shadowsocks \u79d1\u5b66\u4e0a\u7f51\\n\\n## \u5b89\u88c5shadowsocks-qt5\\n\\n````\\nsudo add-apt-repository ppa:hzwhuang/ss-qt5\\n````\\n\\n\u7f16\u8f91`/etc/apt/sources.list.d/hzwhuang-ubuntu-ss-qt5-bionic.list` \u6587\u4ef6\uff0c\u5c06`bionic `(18.04\u7248\u672c\u4ee3\u53f7)\u6539\u6210`xenial`\uff0816.04\u7248\u672c\u4ee3\u53f7\uff09\\n\\n\u56e0\u4e3ashadowsocks-qt5 \u73b0\u5728\u8fd8\u6ca1\u6709\u63d0\u4f9bUbutnu18 \u8fd9\u4e2a\u7248\u672c\u7684\u5ba2\u6237\u7aef\uff0c\u4fee\u6539\u6e90\u6765\u5b89\u88c5\\n\\n```\\nsudo apt-get update\\nsudo apt-get install shadowsocks-qt5 \\n```\\n\\n\\n\\n## \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\\n\\n### \u706b\u72d0\u6d4f\u89c8\u5668\\n\\nfirefox-\u8bbe\u7f6e-\u7f51\u7edc\u4ee3\u7406-\u8bbe\u7f6e\u5982\u4e0b\\n\\n\u4fee\u6539\u4e3a\uff1a\u624b\u52a8\u914d\u7f6e\u4ee3\u7406\uff1aSOCKS\u4e3b\u673a\uff1a127.0.0.1\uff0c\u7aef\u53e3\uff1a1080\u3002\u4f7f\u7528SOCKS v5\u65b9\u5f0f\\n\\n\\n\\n### \u8c37\u6b4c\u6d4f\u89c8\u5668\\n\\n\u4f7f\u7528[proxy Switchsharp](https://www.switchysharp.com/file/switchysharp-v1.10.4.zip)\u63d2\u4ef6\uff0c\u8bbe\u7f6e\u706b\u72d0\u6d4f\u89c8\u5668\u7c7b\u4f3c\u3002\\n\\n**\u8fd9\u91cc\u6709\u4e00\u70b9\u8981\u6ce8\u610f\uff0c\u8981\u5728\u63d2\u4ef6\uff0c\u4e5f\u5c31\u662f\u6d4f\u89c8\u5668\u5de6\u4e0a\u89d2\u7684\u5c0f\u5730\u7403\u56fe\u6807\u4e0a\u70b9\u51fb\u2014\u2014\u8bbe\u7f6e\u8fde\u63a5\uff0c\u5426\u5219\u662f\u4e0d\u8fdb\u884c\u4ee3\u7406\u7684**"},{"id":"long-blog-post","metadata":{"permalink":"/blog/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"prevItem":{"title":"Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51","permalink":"/blog/blog/2021/01/01/Ubuntu18-04-\u4f7f\u7528Shadowsocks-\u79d1\u5b66\u4e0a\u7f51"},"nextItem":{"title":"First Blog Post","permalink":"/blog/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"prevItem":{"title":"Long Blog Post","permalink":"/blog/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);