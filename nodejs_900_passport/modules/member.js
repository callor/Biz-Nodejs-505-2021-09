import fs from "fs";
const member_file = "./config/member.json";

export const member_append = (join_member) => {
    const members = member_read();

    const find_member = members.find((member) => member.username === join_member.username);
    let new_members = [];

    // 기존에 있는 memebr 이면 update
    if (find_member)
        new_members = [
            ...members.map((member) => {
                if (member.username === join_member.username) return join_member;
                else return member;
            }),
        ];
    // 없는 member 이면 추가
    else new_members = [...members, join_member];

    // 파일에 저장
    fs.writeFileSync(member_file, JSON.stringify(new_members));
};

export const member_read = () => {
    return [...JSON.parse(fs.readFileSync(member_file))];
};
