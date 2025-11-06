const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        postId: { type: String, index: true }, //Optional (frontend passes it)
        title: { type: String, required: true, trim: true },
        content: { type: String, default: "" }
    }, 
    
    {timestamps: true }
);

postSchema.index({ userId: 1, createdAt: -1 });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

