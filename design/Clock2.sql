--
-- File generated with SQLiteStudio v3.4.4 on Wed May 10 15:02:47 2023
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Day
CREATE TABLE IF NOT EXISTS Day (
    DateID INTEGER PRIMARY KEY AUTOINCREMENT
                   NOT NULL,
    Date   TEXT    NOT NULL
                   UNIQUE,
    Notes  TEXT
);
STRICT;

-- Table: Lap
CREATE TABLE IF NOT EXISTS Lap (
    LapID INTEGER PRIMARY KEY AUTOINCREMENT
                  NOT NULL,
    Start TEXT    NOT NULL,
    Stop  TEXT,
    RunID         REFERENCES Run ([Run ID]) 
                  NOT NULL,
    Notes TEXT
);
STRICT;

-- Table: Run
CREATE TABLE IF NOT EXISTS Run (
    RunID    INTEGER PRIMARY KEY AUTOINCREMENT
                     NOT NULL,
    Start    TEXT    NOT NULL,
    Stop     TEXT,
    Notes    TEXT,
    Distance INTEGER,
    Temp     INTEGER,
    DateID   INTEGER REFERENCES Day (DateID) 
                     NOT NULL
)
STRICT;


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
