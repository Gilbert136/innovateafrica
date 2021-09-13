using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class UserFollower
    {
        [Key]
        public int Id { get; set; }
        public int? UserId { get; set; }

        [ForeignKey(nameof(Models.UserFollower.Follower))]
        public int? FollowerId { get; set; }

        //[ForeignKey(nameof(Models.UserFollower.FollowerId))]
        public virtual User Follower { get; set; }
    }
}
