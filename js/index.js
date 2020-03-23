import { news } from "./data/news.js";
import { details } from "./data/details.js";

window.onload = function() {
  const setModalContent = ({ detail_id, detail_title, detail_content, img_source }) => {
    document.getElementById("news-detail-head-line").innerText = detail_title;
    document.getElementById("news-detail-image").src = img_source;
    document.getElementById("news-detail-content").innerHTML = detail_content;
  };

  const openModal = id => {
    let detail_content = details[id - 1];
    setModalContent(detail_content);

    document
      .getElementById("news-detail-modal")
      .setAttribute("class", "modal modal-show");
  };

  const hideModal = () => {
    document
      .getElementById("news-detail-modal")
      .setAttribute("class", "modal fade");
  };

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
    document.getElementById("head-line").innerHTML =
      "<strong>" + head_line + "</strong>";
    document.getElementById("news-thumbnail").src = img_source;
  };

  document.getElementById("news-detail-prev").addEventListener("click", () => {
    goPrev(getNewsId());
  });
  document.getElementById("news-detail-next").addEventListener("click", () => {
    goNext(getNewsId());
  });
  document
    .getElementById("news-detail-opener")
    .addEventListener("click", () => {
      openModal(getNewsId());
    });
  document.getElementById("news-detail-modal").addEventListener("click", () => {
    hideModal();
  });
  document.getElementById("news-modal-dialog").addEventListener("click", e => {
    e.stopPropagation();
  });

  change_news(news[0]);
};
