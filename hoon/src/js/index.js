const $ = (selector) => document.querySelector(selector);

function App() {
  const updateHoonCount = () => {
    const count = $(".hoon_list").querySelectorAll("li").length;
    $(".count").innerText = `총 ${count}개`;
  };
  const addHoonName = () => {
    if ($(".hoon-name").value === "") {
      alert("암것도 적지 않았다!");
      return;
    }

    const hoonName = $(".hoon-name").value;
    const hoonItem = (hoonName) => {
      return `
        <li>
          <span class="li">${hoonName}</span>
          <button class="edit">수정</button>
          <button class="remove">삭제</button>
        </li>`;
    };

    $(".hoon_list").insertAdjacentHTML("beforeend", hoonItem(hoonName));

    updateHoonCount();
    $(".hoon-name").value = "";
  };
  const updateHoonName = (e) => {
    const $hoonName = e.target.closest("li").querySelector(".li");
    const updateHoonName = prompt("수정하삼", $hoonName.innerText);
    $hoonName.innerText = updateHoonName;
  };
  const removeHoonName = (e) => {
    e.target.closest("li").remove();
    updateHoonCount();
  };

  $(".hoon_list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      updateHoonName(e);
    }

    if (e.target.classList.contains("remove")) {
      if (confirm("정말 삭제할거야?")) {
        removeHoonName(e);
      }
    }
  });

  $(".form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  $(".check").addEventListener("click", addHoonName);

  $(".hoon-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addHoonName();
  });
}
App();
