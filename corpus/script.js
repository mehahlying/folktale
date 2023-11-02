document.addEventListener("DOMContentLoaded", function () {
    // "corpus.json" ファイルを読み込む
    fetch("corpus.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const dictionary = data;

            const searchInput = document.getElementById("searchInput");
            const searchResults = document.getElementById("searchResults");

            // 入力フィールドの変更を監視して、検索結果を更新
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.trim().toLowerCase();
                updateSearchResults(query);
            });

            // 検索結果を更新する関数
            function updateSearchResults(query) {
                searchResults.innerHTML = "";

                for (const key in dictionary) {
                    const term = key.toLowerCase();
                    if (term.includes(query)) {
                        const listItem = document.createElement("li");
                        listItem.innerHTML = `<strong>${key}:</strong> ${dictionary[key]}`;
                        searchResults.appendChild(listItem);
                    }
                }
            }
        })
        .catch(function (error) {
            console.error("辞書データを読み込めません: " + error);
        });
});
