var express = require('express');
var router = express.Router();

let articles = [
	{
		id: 1,
		image: 'https://picsum.photos/seed/picsum/500',
		title: "Title",
		date: new Date(),
		text: `Lorem ipsum dolor sit amet, 
`
	},
	{
		id: 2,
		image: 'https://picsum.photos/seed/picsum/500',
		title: "Title",
		date: new Date(),
		text: `Lorem ipsum dolor sit amet, c
`
	},
	{
		id: 3,
		image: 'https://picsum.photos/seed/picsum/500',
		title: "Title",
		date: new Date(),
		text: `Lorem ipsum dolor sit amet, 
`
	},
];
router.get("/", function (req, res, next) {
	res.send(articles);
});
router.get('/:id', (req, res, next) => {
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const article = articles.find((a) => a.id === Number.parseInt(id));
		res.send(article);
	} else {
		res.send("Not Found");
	}
});
router.post("/", (req, res, next) => {
	const body = req.body;
	const article = {
		id: articles.length + 1,
		title: body.title,
		text: body.text,
		date: new Date()
	};
	articles.push(article);
	console.table(articles);
	res.send({});
});
router.patch('/:id', (req, res, next) => {
	const body = req.body;
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const article = articles.find((a) => a.id === Number.parseInt(id));
		if(article){
			Object.assign(article, body);
		}
		else{
			res.sendStatus(404)
		}
		res.send(article);
	} else {
		res.sendStatus(404);
	}
});
router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		articles = articles.filter((a) => a.id !== Number.parseInt(id));
		console.table(articles);
		res.sendStatus(200);
	}
		else{
			res.sendStatus(404);
		}
});

module.exports = router;
