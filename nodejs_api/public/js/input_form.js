const form_data_send = async () => {
  const form = document.querySelector("form");
  // form 의 input box의 모든 정보를 FormData 객체로 생성
  const form_data = new FormData(form);

  // FormData에서 input 요소(Entries)만 추출하여
  // 별도의 객체로 생성
  const entries_data = Object.fromEntries(form_data.entries());

  console.log(form_data);
  const fetch_option = {
    method: "POST",
    body: JSON.stringify(entries_data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("/bbs/write", fetch_option);
  const result = await res.json();
  console.log(result);
  await bbs_list_view(result);
};

document.addEventListener("DOMContentLoaded", async () => {
  const btn_send = document.querySelector("button.btn_save_form");

  if (btn_send) {
    btn_send.addEventListener("click", () => {
      form_data_send();
    });
  }
});
