export const getDatabase = db_name => JSON.parse(localStorage.getItem(db_name))

export const setDatabase = (db_name, new_db) => localStorage.setItem(db_name, JSON.stringify(new_db))

export const setDatabaseBulk = (db_name, new_db) => {
    let db = getDatabase(db_name)
    db = [...db, ...new_db]
    setDatabase(db_name, db)
}