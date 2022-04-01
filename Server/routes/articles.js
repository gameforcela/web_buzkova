var express = require('express');
var router = express.Router();

const options = {
	verbose: console.debug
}
const db = require('better-sqlite3')('articles.sqlite', options);

router.get("/", function (req, res, next) {
	const articles = db.prepare('SELECT * FROM article').all();
	console.log(articles);
	res.send(articles);
});
router.get('/:id', (req, res, next) => {
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const articles = db.prepare('SELECT * FROM article WHERE article.id = ?').get(id);
		res.send(articles);
	} else {
		res.send("Not Found");
	}
});
router.post("/", (req, res, next) => {

	const body = req.body;
	const image = body.image;
	const title = body.title;
	const text = body.text;
	const date = new Date().toISOString();

	const  insert = db.prepare('INSERT INTO article (image, title, date, text)VALUES (?, ?, ?, ?)');
	insert.run(image, title, date, text);
	res.send({});
});
router.patch('/:id', (req, res, next) => {
	const body = req.body;
	const id = req.params.id
	console.debug(req.params);
	if (id) {
		const article = db.prepare('SELECT * FROM article WHERE article.id = ?').get(id);
		if(article){
			Object.assign(article, body);
			const stm = db.prepare('UPDATE article SET image = ?, title =?, date =? , text =? WHERE id = ?');
			const info = stm.run(article.image, article.title, article.date, article.text, article.id);
			res.sendStatus(200);
		}
		else{
			res.sendStatus(404);
		}
	} else {
		res.sendStatus(404);
	}
});
router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	if (id) {
		const delete_article = db.prepare('DELETE FROM article WHERE article.id = ?');
		delete_article.run(id);
		res.sendStatus(200);
	}
		else{
			res.sendStatus(404);
		}
});

module.exports = router;
