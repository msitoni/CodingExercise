CREATE TABLE "Farmers".farms (
	id integer NULL,
	id_document integer NULL,
	"name" varchar(80) NULL,
	id_address integer NULL,
	CONSTRAINT farms_pk PRIMARY KEY (id)
);


CREATE TABLE "Farmers".address (
	id integer NULL,
	street varchar(60) NULL,
	state varchar(2) NULL,
	address varchar(60) NULL,
	country varchar(2) NULL,
	CONSTRAINT address_pk PRIMARY KEY (id)
);


CREATE TABLE "Farmers"."document" (
	documentnumber varchar NULL,
	documenttype varchar NULL,
	id integer NULL,
	CONSTRAINT document_pk PRIMARY KEY (id)
);


