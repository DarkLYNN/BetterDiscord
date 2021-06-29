/**
 * @name UserTag
 * @version 0.0.1
 * @description My first plugin
 * @invite 6hQUA89
 * @author @dark-LYNN#0069
 * @donate https://www.buymeacoffee.com/darklynn
 */
 module.exports = (_ => {
	const config = {
		"info": {
			"name": "UserTag",
			"author": "Dark-LYNN",
			"version": "0.0.1",
			"description": "Add a tag or crown to everyone"
		},
		"changeLog": {
			"new": {
				"Chat": "Just Made"
			}
		}
	};
	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName () {return config.info.name;}
		getAuthor () {return config.info.author;}
		getVersion () {return config.info.version;}
		getDescription () {return config.info.description;}