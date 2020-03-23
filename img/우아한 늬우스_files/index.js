import { news } from "./data/news.js";

window.onload = function() {
  const getNewsId = () => {
    return Number(document.getElementById("news-id").innerHTML);
  };

  const goPrev = current_id => {
    // head line이랑 썸네일 사진, 기사 id 바꿔주기
    let news_content;
    if (current_id == 1) {
      news_content = news[news.length - 1];
    } else {
      news_content = news[current_id - 2];
    }
    change_news(news_content);
  };
  const goNext = current_id => {
    let news_content;
    if (current_id == news.length) {
      news_content = news[0];
    } else {
      news_content = news[current_id];
    }
    change_news(news_content);
  };

  const change_news = ({ id, head_line, img_source }) => {
    document.getElementById("news-id").innerText = id;
    document.getElementById("head-line").innerText = head_line;
    document.getElementById("news-thumbnail").src = img_source;
  };
  document.getElementById("news-detail-prev").addEventListener("click", () => {
    goPrev(getNewsId());
  });
  document.getElementById("news-detail-next").addEventListener("click", () => {
    goNext(getNewsId());
  });
  change_news(news[0]);
};
