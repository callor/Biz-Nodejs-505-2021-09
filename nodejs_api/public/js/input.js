const bbs_list_view = async (bbs_list) => {
  const bbs_head = document.querySelector("tbody.bbs_list");
  bbs_head.innerText = "";

  const trs = bbs_list.map((bbs, index) => {
    console.log("BBS_LIST", index);
    const tds = Object.keys(bbs).map((key) => {
      const td = document.createElement("TD");
      td.innerText = bbs[key];
      return td;
    });

    const tr = document.createElement("TR");
    tr.append(...tds);
    return tr;
  });
  bbs_head.append(...trs);
};

const data_send = async () => {
  const b_date = document.querySelector("input[name='b_date']");
  const b_time = document.querySelector("input[name='b_time']");
  const b_writer = document.querySelector("input[name='b_writer']");
  const b_subject = document.querySelector("input[name='b_subject']");
  const b_text = document.querySelector("input[name='b_text']");

  const form_data = {
    b_date: b_date.value,
    b_time: b_time.value,
    b_writer: b_writer.value,
    b_subject: b_subject.value,
    b_text: b_text.value,
  };
  console.log(form_data);

  const fetch_option = {
    method: "POST",
    body: JSON.stringify(form_data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("/bbs/write", fetch_option);
  const json = await res.json();
  await console.log(json);
  await bbs_list_view(json);
};

document.addEventListener("DOMContentLoaded", () => {
  const btn_save = document.querySelector("button.btn_save_json");

  if (btn_save) {
    btn_save.addEventListener("click", () => {
      alert("저장");
      data_send();
    });
  }
});
