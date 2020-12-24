import emojiList from './emojiList.json';

const filterEmoji = (queryString: string, maxResults: number) => {
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(queryString.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(queryString)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
};


export default filterEmoji;