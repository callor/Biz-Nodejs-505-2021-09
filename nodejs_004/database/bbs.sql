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

DROP TABLE tbl_bbs;
DROP TABLE tbl_replys;






