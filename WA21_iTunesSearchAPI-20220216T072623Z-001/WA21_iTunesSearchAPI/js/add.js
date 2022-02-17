$(function () {
  $("search_button").on("click", function () {
    $.ajax({
      url: "https://itunes.apple.com/search",
      datatype: "jsonp",
      /**
       *
       */
      //   データのパラメータ設定(URL上で反映される)
      data: {
        lang: "ja_jp",
        media: "movie",
        entity: "song",
        // 入力したキーワード
        term: keyWord, //必須 → 検索したいキーワード
        country: "jp", // 必須
        limit: "10",
      },
    })
      .done(function (json) {
        console.log(json);
        console.log(json.results[0]);
        console.log(json.results[0].artworkUrl100);

        const results = json.results;

        for (let i = 0; i < results.length; i++) {
          $(".result").append(
            `<p><img src="${json.results[0].artworkUrl100}" alt=""</p>`
          );
          $(".result").append(`<h3>${results[0].artistName}</h3>`);
          $(".result").append(`<p>${results[0].trackName}</p>`);
          $(".result").append(
            `<p><a href="${results[0].collectionViewUrl}">曲のページへ</a></p>`
          );
        }
      })
      .fail(function () {});
  });
});
