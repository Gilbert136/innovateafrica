﻿// <auto-generated />
using System;
using Innovateafrica;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Innovateafrica.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20210912184323_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Innovateafrica.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("DocumentId")
                        .HasColumnType("int");

                    b.Property<int?>("IdeaId")
                        .HasColumnType("int");

                    b.Property<int?>("ImplemetationId")
                        .HasColumnType("int");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("DocumentId");

                    b.HasIndex("IdeaId");

                    b.HasIndex("ImplemetationId");

                    b.HasIndex("ProjectId");

                    b.ToTable("Comment");
                });

            modelBuilder.Entity("Innovateafrica.Models.Document", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IdeaId")
                        .HasColumnType("int");

                    b.Property<int?>("ImplementationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Views")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("IdeaId");

                    b.HasIndex("ImplementationId");

                    b.HasIndex("ProjectId");

                    b.ToTable("Document");
                });

            modelBuilder.Entity("Innovateafrica.Models.Idea", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Star")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Idea");
                });

            modelBuilder.Entity("Innovateafrica.Models.IdeaContributor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IdeaId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("IdeaId");

                    b.HasIndex("UserId");

                    b.ToTable("IdeaContributor");
                });

            modelBuilder.Entity("Innovateafrica.Models.Implementation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Alias")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ImplementationStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Star")
                        .HasColumnType("int");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Implementation");
                });

            modelBuilder.Entity("Innovateafrica.Models.ImplementationContributor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ImplementationId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ImplementationId");

                    b.HasIndex("UserId");

                    b.ToTable("ImplementationContributor");
                });

            modelBuilder.Entity("Innovateafrica.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ProgressPercentage")
                        .HasColumnType("int");

                    b.Property<string>("ProjectStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RepositoryLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Star")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("Innovateafrica.Models.ProjectContributor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ProjectId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("ProjectContributor");
                });

            modelBuilder.Entity("Innovateafrica.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Bio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GithubLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinkedInLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Star")
                        .HasColumnType("int");

                    b.Property<string>("Telephone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Innovateafrica.Models.UserFollower", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FollowerId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FollowerId");

                    b.HasIndex("UserId");

                    b.ToTable("UserFollower");
                });

            modelBuilder.Entity("Innovateafrica.Models.UserFollowering", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FolloweringId")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FolloweringId");

                    b.HasIndex("UserId");

                    b.ToTable("UserFollowering");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Innovateafrica.Models.Comment", b =>
                {
                    b.HasOne("Innovateafrica.Models.Document", null)
                        .WithMany("Comments")
                        .HasForeignKey("DocumentId");

                    b.HasOne("Innovateafrica.Models.Idea", null)
                        .WithMany("Comments")
                        .HasForeignKey("IdeaId");

                    b.HasOne("Innovateafrica.Models.Implementation", null)
                        .WithMany("Comments")
                        .HasForeignKey("ImplemetationId");

                    b.HasOne("Innovateafrica.Models.Project", null)
                        .WithMany("Comments")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("Innovateafrica.Models.Document", b =>
                {
                    b.HasOne("Innovateafrica.Models.Idea", null)
                        .WithMany("Documents")
                        .HasForeignKey("IdeaId");

                    b.HasOne("Innovateafrica.Models.Implementation", null)
                        .WithMany("Documents")
                        .HasForeignKey("ImplementationId");

                    b.HasOne("Innovateafrica.Models.Project", null)
                        .WithMany("Documents")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("Innovateafrica.Models.IdeaContributor", b =>
                {
                    b.HasOne("Innovateafrica.Models.Idea", "Idea")
                        .WithMany("Contributors")
                        .HasForeignKey("IdeaId");

                    b.HasOne("Innovateafrica.Models.User", "User")
                        .WithMany("IdeaContributions")
                        .HasForeignKey("UserId");

                    b.Navigation("Idea");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Innovateafrica.Models.ImplementationContributor", b =>
                {
                    b.HasOne("Innovateafrica.Models.Implementation", "Implementation")
                        .WithMany("Contributors")
                        .HasForeignKey("ImplementationId");

                    b.HasOne("Innovateafrica.Models.User", "User")
                        .WithMany("ImplementationContributions")
                        .HasForeignKey("UserId");

                    b.Navigation("Implementation");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Innovateafrica.Models.ProjectContributor", b =>
                {
                    b.HasOne("Innovateafrica.Models.Project", "Project")
                        .WithMany("Contributors")
                        .HasForeignKey("ProjectId");

                    b.HasOne("Innovateafrica.Models.User", "User")
                        .WithMany("ProjectContributions")
                        .HasForeignKey("UserId");

                    b.Navigation("Project");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Innovateafrica.Models.UserFollower", b =>
                {
                    b.HasOne("Innovateafrica.Models.User", "Follower")
                        .WithMany()
                        .HasForeignKey("FollowerId");

                    b.HasOne("Innovateafrica.Models.User", null)
                        .WithMany("Followers")
                        .HasForeignKey("UserId");

                    b.Navigation("Follower");
                });

            modelBuilder.Entity("Innovateafrica.Models.UserFollowering", b =>
                {
                    b.HasOne("Innovateafrica.Models.User", "Followering")
                        .WithMany()
                        .HasForeignKey("FolloweringId");

                    b.HasOne("Innovateafrica.Models.User", null)
                        .WithMany("Followings")
                        .HasForeignKey("UserId");

                    b.Navigation("Followering");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Innovateafrica.Models.Document", b =>
                {
                    b.Navigation("Comments");
                });

            modelBuilder.Entity("Innovateafrica.Models.Idea", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Contributors");

                    b.Navigation("Documents");
                });

            modelBuilder.Entity("Innovateafrica.Models.Implementation", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Contributors");

                    b.Navigation("Documents");
                });

            modelBuilder.Entity("Innovateafrica.Models.Project", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Contributors");

                    b.Navigation("Documents");
                });

            modelBuilder.Entity("Innovateafrica.Models.User", b =>
                {
                    b.Navigation("Followers");

                    b.Navigation("Followings");

                    b.Navigation("IdeaContributions");

                    b.Navigation("ImplementationContributions");

                    b.Navigation("ProjectContributions");
                });
#pragma warning restore 612, 618
        }
    }
}
