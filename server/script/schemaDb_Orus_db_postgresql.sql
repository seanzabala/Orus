--
-- Database: orus_db
--

CREATE DATABASE orus_db;

-- ENTITIES

--
-- Schema entity taxpayerinfo
--

CREATE TABLE IF NOT EXISTS "taxpayerinfo" (
	BIRFormNumber numeric  NOT NULL,
	BirthDateOrgDate date  NOT NULL,
	BirthPlace varchar(130)  NOT NULL,
	Citizenship varchar(130)  NOT NULL,
	CivilStatus bool  NOT NULL,
	DateOfArrivalInPhilippines date ,
	EmailAddress varchar(130)  NOT NULL,
	FathersName varchar(130)  NOT NULL,
	FaxNo numeric ,
	FirstName varchar(130)  NOT NULL,
	Gender bool  NOT NULL,
	IDEffectiveDate date  NOT NULL,
	IDExpiryDate date  NOT NULL,
	IDIssuer varchar(130)  NOT NULL,
	IDNo numeric  NOT NULL,
	IDType bool  NOT NULL,
	IssuePlaceCountry varchar(130) ,
	LandlineNo numeric  NOT NULL,
	LastName varchar(130)  NOT NULL,
	MiddleName varchar(130) ,
	MobileNo numeric  NOT NULL,
	MothersMaidenName varchar(130)  NOT NULL,
	NickName varchar(130) ,
	PrefferedContactType bool  NOT NULL,
	RegisteredName varchar(130) ,
	Suffix varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);



