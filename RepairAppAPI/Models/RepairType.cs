using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RepairAppAPI.Models
{
    public class RepairType
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string RepairName { get; set; } = string.Empty;


    }
}
