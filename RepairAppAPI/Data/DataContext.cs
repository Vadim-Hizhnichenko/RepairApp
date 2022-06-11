using Microsoft.EntityFrameworkCore;
using RepairAppAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepairAppAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        
        public DbSet<Repair> Repairs { get; set; }
        public DbSet<RepairType> RepairTypes { get; set; }
        public DbSet <Status> Statuses { get; set; }
    }       
}
