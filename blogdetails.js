function showBlogDetails(blogId) {

    const blogDetailsData = {
        1: {
            title: "প্রেক্টিক্যাল মেশিন লার্নিং পার্ট-১",
            content: "প্র‍্যকটিক্যালি মেশিন লার্নিং আয়ত্ত করার উদ্দেশ্য নিয়ে মূলত আমাদের এই ব্লগটি সাজানো।"
        },
        2: {
            title: "প্রেক্টিক্যাল মেশিন লার্নিং পার্ট-২",
            content: "প্রেক্টিক্যাল মেশিন লার্নিং ব্লগের এর পরবর্তী পার্ট"
        }
    };

    // Set the blog details based on the blogId
    function showBlogDetails(blogId) {
        // Retrieve the blog details based on the blogId
        const blogDetails = blogDetailsData[blogId];
    
        // Update the HTML elements with the blog details
        document.getElementById("blog-details-title").textContent = blogDetails.title;
        document.getElementById("blog-details-content").textContent = blogDetails.content;
    
        // Show the blog details container
        document.getElementById("blog-details").style.display = "block";
    }
}
