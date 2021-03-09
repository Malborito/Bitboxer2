INSERT INTO USER ( ID_USER, USERNAME, PASSWORD, ENABLED, ADMIN )
VALUES
    ( 0, 'Admin', '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', 1, 1 ),
    ( 1, 'USR_logistica', '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', 1, 0 ),
    ( 2, 'Guille', '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', 1, 0 );

INSERT INTO ITEM ( ID_ITEM, ITEM_CODE, DESCRIPTION, PRICE, STATE, CREATOR, CREATION )
VALUES
    (1, 010101, 'Bauer Vapor 2X Pro Senior Roller Hockey Skates', 1199.99, 1, 'pepe', CURRENT_DATE()),
    (2, 010102, 'Bauer Vapor X2.9 Senior Roller Hockey Skates', 449.49, 1, 'pepe',  CURRENT_DATE()),
    (3, 010201, 'Bauer Supreme UltraSonic Senior Hockey Stick', 229.99, 1, 'pepe',  CURRENT_DATE()),
    (4, 020201, 'CCM RibCor Trigger 5 Pro Grip Senior Hockey Stick', 200, 0, 'pepe',  CURRENT_DATE()),
    (5, 010301, 'Bauer Supreme 2S Pro Senior Hockey Gloves', 200, 1, 'pepe',  CURRENT_DATE()),
    (6, 030301, 'Warrior DX Pro Senior Hockey Gloves', 130, 0, 'pepe',  CURRENT_DATE()),
    (7, 040401, 'Labeda Addiction Grip 76A Roller Hockey Wheel Yellow', 14, 1, 'pepe',  CURRENT_DATE()),
    (8, 050401, 'Rink Rat World Cup 82A Roller Hockey Wheel Orange', 8.50, 1, 'pepe',  CURRENT_DATE()),
    (9, 060201, 'Easton Synergy HTX Grip Intermediate Hockey Stick', 30, 0, 'pepe',  CURRENT_DATE());

INSERT INTO SUPPLIER (ID_SUPPLIER , COUNTRY , NAME )
VALUES
    (1, 'Spain', 'Slide Sports'),
    (2, 'Spain', 'Federal Sports'),
    (3, 'USA', 'Hockey Monkey'),
    (4, 'Sweeden', 'HPS Sports'),
    (5, 'Finland', 'Hockey Office'),
    (6, 'Czech republic', 'Easton');

INSERT INTO ITEM_SUPPLIER ( ITEM_ID ,SUPPLIER_ID )
 VALUES
    ( 1 ,1 ),
    ( 1 ,3 ),
    ( 1 ,5 ),
    ( 2 ,3 ),
    ( 3 ,5 ),
    ( 4 ,2 ),
    ( 5 ,5 ),
    ( 6 ,2 ),
    ( 7 ,6 ),
    ( 8 ,1 ),
    ( 9 ,4 ),
    ( 9 ,6 ),
    ( 4 ,3 ),
    ( 7 ,2 ),
    ( 8 ,6 );
