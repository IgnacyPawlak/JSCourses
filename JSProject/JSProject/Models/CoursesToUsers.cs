namespace JSProject.Models
{
    public class CoursesToUsers
    {
        // relation
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
