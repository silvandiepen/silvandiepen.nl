export const insert = (str, atIndex, value) => {
	if (typeof atIndex === 'object') {
		let newStr = str;
		atIndex.forEach((idx, index) => {
			newStr =
				newStr.substr(0, idx + value.length * index) +
				value +
				newStr.substr(idx + value.length * index);
		});
		return newStr;
	} else {
		return str.substr(0, atIndex) + value + str.substr(atIndex);
	}
};
export const makeDate = (date) => new Date(insert(date, [4, 6], '-'));
export const makeUri = (str) => str.substr(9, str.length).replace('.md', '');

export const stripTitle = (str) => {
	return str.replace(getTitle(str, false));
};

const findAfter = (str, needle, afterIndex) => {
	for (let i = 0; i < str.length; i++)
		if (str[i] === needle && i > afterIndex) return i;
};

export const getTitle = (str, clean = true) => {
	const startTitle = str.indexOf('# ');
	const endTitle = findAfter(str, '\n', startTitle);

	if (clean) return str.substr(startTitle + 2, endTitle).split('\n')[0];
	return str.substr(startTitle, endTitle).split('\n')[0];
};

export const hasMetaData = (str) => {
	return !!str.match(/(?<=---\s+).*?(?=\s+---)/gs);
};
export const getMetaData = (str) => {
	if (hasMetaData(str)) {
		const meta = str
			.match(/(?<=---\n+).*?(?=\n+---)/gs)[0]
			.split('\n')
			.map(
				(tag) =>
					(tag = {
						name: tag.split(':')[0],
						value:
							tag.split(': ')[1].split(',').length > 1
								? tag
										.split(': ')[1]
										.split(',')
										.map((item) => item.trim())
								: tag.split(': ')[1]
					})
			);
		const metaObject = {};
		meta.forEach((item) => {
			metaObject[item.name] = item.value;
		});
		return metaObject;
	}
	return {};
};

export const stripMetaData = (str) => {
	return str.replace(getMetaData(str, false));
};
// const metaDataRegex = new RegExp('---\\n*?\\n---', 'g');

export const getContent = (str) => {
	return str
		.replace(/(---\\n).+?(---\\n)/gi, '\t')
		.replace(getTitle(str, false), '');
	// return str
	// .replace(/(?<=---\s+).*?(?=\s+---)/gs, '')
	// .replace(getTitle(str, false), '');
};
