const getTheTitles = function (obj) {
  const resultArray = obj.map((item) => {
    return item.title;
  });

  return resultArray;
  // return obj.title
};

// Do not edit below this line
module.exports = getTheTitles;
