const otherResolvers = {
  Tag: {
    wordsDefs: async (wordData) => await wordData.getWordData(),
  },
  User: {
    words: async (wordData) => await wordData.getWord(),
    wordDefs: async (wordDefData) => await wordDefData.getWordDef(),
  },
  WordData: {
    user: async (userData) => await userData.getUser(),
    word: async (wordData) => await wordData.getWord(),
    tags: async (tagData) => await tagData.getTag(),
  },
  Word: {
    wordData: async (word) => await word.getWordDef(),
    relatedTerms: async (word) => await word.getRelatedTerms(),
  },
};

module.exports = otherResolvers;
