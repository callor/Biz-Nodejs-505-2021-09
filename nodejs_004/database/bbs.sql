-- % : 어디에서나 접근가능
CREATE USER 'node'@'%' 
identified by'12341234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* 
TO 'node'@'%';

CREATE DATABASE nodeDB;
USE nodedb;
DESC tbl_bbs;
DROP TABLE tbl_bbs;
DESC tbl_bbs;

SELECT * FROM tbl_bbs;

SHOW DATABASES ;
USE nodeDB;
SHOW TABLES ;
DESC TBL_bbs ;
USE nodedb;
DESC tbl_replays;

DROP TABLE tbl_replies;
DROP TABLE tbl_bbs;

DROP TABLE tbl_replays;


SELECT * FROM tbl_replays;

DESC tbl_replies;

USE nodedb;
SHOW TABLES;
DESC tbl_products;

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES 
('P0001','1000원 김밥',1000),
('P0002','참치김밥',2500),
('P0003','어묵해장국',3000),
('P0004','매운 떡볶이',35000),
('P0005','돈까스',4000),
('P0006','치즈김밥',2500),
('P0007','여름 쫄면',3500),
('P0008','순두부찌개',4000),
('P0009','비빔냉면',4000),
('P0010','마요라면',2000);

SELECT * FROm tbl_products;






