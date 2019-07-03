(function () {
	this.I18n = function (defaultLang) {
		const lang = defaultLang || 'en';
		this.language = lang;

		( (i18n) => {
			i18n.contents = polinaJson;
			i18n.contents.prop = function (key) {
				let result = this;
				const keyArr = key.split('.');
				for (let index = 0; index < keyArr.length; index++) {
					const prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		const contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		const dfs =  (node, keys, results) => {
			const isLeaf =  (node) => {
				for (let prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (let prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					const myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		const keys = dfs(contents, [], []);
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
                const text = document.querySelector(`[data-i18n="${key}"]`);
                if (text) {
                    text.innerHTML = contents.prop(key)[this.language];
                }
                const place = document.querySelector(`[data-i18n-placeholder="${key}"]`);
                if(place) {
                    place.setAttribute('placeholder', contents.prop(key)[this.language]);
                }
                const value = document.querySelector(`[data-i18n-value="${key}"]`);
                if (value) {
                    value.setAttribute('value', contents.prop(key)[this.language]);
				}
				const href = document.querySelector(`[data-i18n-href="${key}"]`);
				if (href) {
					href.setAttribute("href", contents.prop(key)[this.language]); 
				}
			} else {
                const text = document.querySelector(`[data-i18n="${key}"]`);
                if (text) {
                    text.innerHTML = contents.prop(key)['en'];
                }
                const place = document.querySelector(`[data-i18n-placeholder="${key}"]`);
                if(place) {
                place.setAttribute('placeholder', contents.prop(key)['en']);

                }
                const value = document.querySelector(`[data-i18n-value="${key}"]`);
                if (value) {
                    value.setAttribute('value', contents.prop(key)['en']);
				}
				const href = document.querySelector(`[data-i18n-href="${key}"]`);
				if (href) {
					href.setAttribute("href", contents.prop(key)['en']); 
				}
			}
		}
	};

}).apply(window);

document.addEventListener("DOMContentLoaded", () => { 
    const i18n = new I18n();
	i18n.localize();
	document.querySelector('.lang-picker #english').classList.add('selected');
	
	document.querySelector('.lang-picker #english').addEventListener('click', () => {
		i18n.lang('en');
		selectLang(document.querySelector('.lang-picker #english'));
	})
	document.querySelector('.lang-picker #russian').addEventListener('click', () => {
		i18n.lang('ru');
		selectLang(document.querySelector('.lang-picker #russian'));
	})

	function selectLang (picker) {
        document.querySelectorAll('.lang-picker li')[0].classList.remove('selected');
        document.querySelectorAll('.lang-picker li')[1].classList.remove('selected');
		picker.classList.add('selected');
	}
  });
