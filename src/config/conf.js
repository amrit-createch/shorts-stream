const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteStorageId : String(import.meta.env.VITE_APPWRITE_STORAGE_ID),

    // Collections
  appwriteCollectionVideos: String(import.meta.env.VITE_APPWRITE_COLLECTION_VIDEOS),
  appwriteCollectionUsers: String(import.meta.env.VITE_APPWRITE_COLLECTION_USERS),
  appwriteCollectionLikes: String(import.meta.env.VITE_APPWRITE_COLLECTION_LIKES),
  appwriteCollectionFollows: String(import.meta.env.VITE_APPWRITE_COLLECTION_FOLLOWS),
  appwriteCollectionComments: String(import.meta.env.VITE_APPWRITE_COLLECTION_COMMENTS),
}
export default conf