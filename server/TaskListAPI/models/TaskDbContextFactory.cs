using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TaskListAPI.Models
{
    public class TaskDbContextFactory : IDesignTimeDbContextFactory<TaskDbContext>
    {
        public TaskDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<TaskDbContext>();

            // Substitua pela sua connection string real
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=tasklistdb;Username=postgres;Password=postgres");

            return new TaskDbContext(optionsBuilder.Options);
        }
    }
}