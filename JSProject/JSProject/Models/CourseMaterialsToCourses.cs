namespace JSProject.Models
{
    public class CourseMaterialsToCourses
    {
        // relation
        public string MaterialId { get; set; }
        public CourseMaterial Material { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
