replacement paths for server/local
/images/assets/savlok/
 dist/images/


Dev Notes by javaBoxer: 8/7/17
We will be using savlok-brochure.html in several sites:

1. masterkeyed.com
2.
3.
4.


Files/Dir: local | server
1. savlok-brochure.html (root)
2. savlokPage.js 		(dist/js)
3. savlok-style.less 	(less)
4. savlok-style.min.css (dist/css)
4. bootstrap.less 		(less)
5. gruntfile.js			(root) [search for savlok for modifications]


1. savlok-brochure.html
	Server Location: /Skins/Skin_*/Topics/
	Add Script to page (bottom)
	<script src="dist/js/savlok-page.js"></script>
	
2. savlok-page.js
	Server Location: /Scripts/savlok/

3. savlok-style.less
	Server Location: /Css/savlok/

4. savlok-style.min.css
	Server Location: /Css/savlok/
	
5. bootstrap.less
	Server Location:

6. gruntfile.js
	Not needed on server (local FED build process)


7. _HEAD.cshtml
	Server Location: /Skins/Skin_21/Views/Shared/
		Add link above the bootstrap.min.css
		<link href="/css/savlok/savlok-style.min.css" rel="stylesheet">

8. _BodyClose.cshtml
	Server Location:
	Add script after dist/js/page.js
	<script src="/scripts/savlok/savlok-page.js"></script>
	
