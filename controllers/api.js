const Poem = require('../models/poem');
const Sentence = require('../models/sentence');

exports.postPoem = (req, res, next) => {
    const name = req.body.name;
    const location = req.body.location;
    const date = req.body.date;
    const text = req.body.text;
    const lines = text.split('/n');
    const poem = new Poem({
        name: name,
        location: location,
        date: date
    });
    poem
        .save()
        .then(result => {
            console.log("Created poem.");
        })
        .catch(err => {
            console.log(err);
        });
    lines.forEach((line, i) => {
        const sentence = new Sentence({
            line: line,
            order: i,
            poem_id: poem.id
        });
        sentence
            .save()
            .then(result => {
                console.log("Created sentence.");
            })
            .catch(err => {
                console.log(err);
            });
    });
};

exports.getPoems =  (req, res, next) => {
    Poem
        .find()
        .then(poems => {
            console.log(poems);
        })
        .catch(err => console.log(err));
};

exports.getPoem = (req, res, next) => {
    const poemId = req.params.poemId;
    Poem
        .findById(poemId)
        .then(poem => {
            console.log(poem);
        })
        .catch(err => console.log(err));
};

exports.patchPoem = (req, res, next) => {
    // TO DO
};

exports.deletePoem = (req, res, next) => {
    const poemId = req.body.poemId;
    Poem
        .findById(poemId)
        .destroy()
        .then(() => {
            console.log("Poem removed from database.");
        })
        .catch(err => console.log(err));
};