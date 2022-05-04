using System;

namespace JSProject.Models
{
    public class CoursesToUsers
    {
        public DateTime LimitTermin { get; set; }

        // relation
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
