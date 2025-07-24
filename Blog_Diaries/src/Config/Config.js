const Config={
    // url
    url:String(import.meta.env.VITE_APPWRITE_URL),
    // project
    projectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    // database
    databaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    // collections
    usercollectionID:String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
    postcollectionID:String(import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID)
    // bucket
    
}
    
export default Config;