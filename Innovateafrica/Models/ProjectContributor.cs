using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class ProjectContributor
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Models.ProjectContributor.Project))]
        public int? ProjectId { get; set; }
        [ForeignKey(nameof(Models.ProjectContributor.User))]
        public int? UserId { get; set; }


        public virtual Project Project { get; set; }
        public virtual User User { get; set; }
    }
}
