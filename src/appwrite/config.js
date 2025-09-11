import conf from '../config/conf'
import {Client ,ID, Account ,Storage,Databases} from "appwrite"
 
export class Service{
    client = new Client();
    Databases;
    Storage;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.Databases = new Databases(this.client);
        this.Storage = new Storage(this.client)
    }
    async createVideo({
        title,
        userId,
        category,
        duration,
        description,
        tags,
        videoFileId,
        videoUrl,
        isActive = true,
    }){
        try {
            const response =  await this.Databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionVideos,
                ID.unique(),
                 {
                    title,
                    userId,
                    category,
                    duration,
                    description,
                    tags,
                    videoFileId,
                    videoUrl,
                    isActive,
                    viewsCount: 0,
                    likesCount: 0,
                    commentCount: 0,
                }
            )
             return response;
        } catch (error) {
            console.error("Create Video Error:", error);
            throw error;
        }
    }
    async uploadVideo (file){
        try {
            const response = await this.bucket.createFile(
                conf.appwriteStorageId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.error("Upload Video Error:", error);
            throw error;
        }
    }
    async updateVideo(videoId,data{
        title, 
        category, 
        description, 
        tags, 
        isActive 
    }){
        try {
            return await this.Databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionVideos,
                conf.appwriteCollectionVideos,
                videoId,data
            )
        } catch (error) {
            console.log("Appwrite service :: updateVideo :: error", error);
      return false;
        }
    }
      async deleteVideo(videoId) {
    try {
      await this.Databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionVideos,
        videoId
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteVideo :: error", error);
      return false;
    }
  }

async getRandomVideos(limit = 10) {
  try {
    const response = await this.Databasesatabases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionVideos,
      [
        Query.limit(limit),
        Query.orderDesc("$createdAt") 
      ]
    );
    return response.documents.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log("Appwrite service :: getRandomVideos :: error", error);
    return [];
  }
}

  async getMoreVideos(lastVideoId, limit = 10) {
  try {
    const response = await this.Databasesatabases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionVideos,
      [
        Query.limit(limit),
        Query.orderDesc("$createdAt"),
        Query.cursorAfter(lastVideoId) // continue after last video
      ]
    );

    return response.documents.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log("Appwrite service :: getMoreVideos :: error", error);
    return [];
  }
}

}
const service = new Service()
export default service