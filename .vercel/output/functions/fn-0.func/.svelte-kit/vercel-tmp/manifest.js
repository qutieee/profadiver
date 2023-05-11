export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about-us-img.png","favicon.png","features1.png","features2.png","img1.jpg","novs.jpg","profadiver-ali.png","profadiver-logo.png","rei.jpg","rose.jpg","su.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ac877093.js","imports":["_app/immutable/entry/start.ac877093.js","_app/immutable/chunks/index.b52b6bba.js","_app/immutable/chunks/singletons.3c7e4aac.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.289fab72.js","imports":["_app/immutable/entry/app.289fab72.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.b52b6bba.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/About",
				pattern: /^\/About\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Contact",
				pattern: /^\/Contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Profadiver",
				pattern: /^\/Profadiver\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
