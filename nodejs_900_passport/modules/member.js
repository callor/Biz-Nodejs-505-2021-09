import fs from "fs";
const member_file = "./config/member.json";

export const member_append = (join_member) => {
    const members = member_read();

    const find_member = members.find((member) => member.userid === join_member.userid);
    let new_members = [];
    if (find_member)
        new_members = [
            ...members.map((member) => {
                if (member.userid === join_member.userid) return join_member;
                else member;
            }),
        ];
    else new_members = [...members, join_member];

    fs.writeFileSync(member_file, JSON.stringify(new_members));
};

export const member_read = () => {
    return [...JSON.parse(fs.readFileSync(member_file))];
};
