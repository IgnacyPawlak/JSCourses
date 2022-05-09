using IdentityServer4.EntityFramework.Options;
using JSProject.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JSProject.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseMaterial> CourscMaterials { get; set; }
        public DbSet<CourseMaterialType> CourscMaterialTypes { get; set; }
        public DbSet<CourseMaterialsToCourses> CourseMaterialsToCourses { get; set; }
        public DbSet<CoursesToUsers> CoursesToUsers { get; set; }
        public DbSet<MyRole> MyRoles { get; set; }
        public DbSet<MyRoleToUser> MyRoleToUsers{ get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //////////////////////////////////////// CourseMaterialType one to many CourseMaterial
            builder.Entity<CourseMaterial>()
                .HasOne<CourseMaterialType>(x => x.Type)
                .WithMany(y => y.CourscMaterials)
                .HasForeignKey(z => z.CourseMaterialTypeId);

            //////////////////////////////////////// Course many to many CourseMaterial
            builder.Entity<CourseMaterialsToCourses>().HasKey(k => new { k.MaterialId, k.CourseId });

            builder.Entity<CourseMaterialsToCourses>()
                .HasOne<Course>(x => x.Course)
                .WithMany(y => y.Materials)
                .HasForeignKey(z => z.CourseId);


            builder.Entity<CourseMaterialsToCourses>()
                .HasOne<CourseMaterial>(x => x.Material)
                .WithMany(y => y.Courses)
                .HasForeignKey(z => z.MaterialId);

            //////////////////////////////////////// Item many to many Department
            builder.Entity<CoursesToUsers>().HasKey(k => new { k.CourseId, k.UserId });

            builder.Entity<CoursesToUsers>()
                .HasOne<ApplicationUser>(x => x.User)
                .WithMany(y => y.Courses)
                .HasForeignKey(z => z.UserId);


            builder.Entity<CoursesToUsers>()
                .HasOne<Course>(x => x.Course)
                .WithMany(y => y.Users)
                .HasForeignKey(z => z.CourseId);

            //////////////////////////////////////// user(teacher) one to many Course
            builder.Entity<Course>()
                .HasOne<ApplicationUser>(x => x.Teacher)
                .WithMany(y => y.CoursesTeacher)
                .HasForeignKey(z => z.TeacherId);

            //////////////////////////////////////// Users many to many MyRole
            builder.Entity<MyRoleToUser>().HasKey(k => new { k.UserId, k.MyRoleId });

            builder.Entity<MyRoleToUser>()
                .HasOne<ApplicationUser>(x => x.ApplicationUser)
                .WithMany(y => y.myRoles)
                .HasForeignKey(z => z.UserId);


            builder.Entity<MyRoleToUser>()
                .HasOne<MyRole>(x => x.MyRole)
                .WithMany(y => y.myRoleToUsers)
                .HasForeignKey(z => z.MyRoleId);
        }

    }
}
