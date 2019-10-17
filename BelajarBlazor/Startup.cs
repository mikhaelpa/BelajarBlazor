using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BelajarBlazor.Data;
using BelajarBlazor.Services;
using BelajarBlazor.Entities;
using Microsoft.EntityFrameworkCore;
using BelajarBlazor.Models;
using FluentValidation;
using Microsoft.AspNetCore.Http.Features;

namespace BelajarBlazor
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();                  // Nambahin Web API Support
            // services.AddControllersWithViews();      // Tambahin MVC Classic Support (Please Don't)
            services.AddSignalR();                      // Tambahin Hub Support
            services.AddRazorPages();                   // Tambahin Razor Page Support
            services.AddServerSideBlazor().AddCircuitOptions(options =>
            {
                options.DetailedErrors = true;
            });             // Tambahin Blazor Support


            services.AddDbContext<BelajarDbContext>(options =>
            {
                options.UseNpgsql(Configuration.GetConnectionString("DB"));
            }, ServiceLifetime.Transient);

            services.AddSingleton<WeatherForecastService>();

            services.AddScoped<TieService>();
            //services.AddTransient<IValidator<EmployeeCreateFormModel>, EmployeeCreateFormModelValidator>();
            services.AddValidatorsFromAssemblyContaining<Program>();

            services.AddAuthentication("cookie").AddCookie("cookie", options =>
            {
                options.LoginPath = "/login";
                options.LogoutPath = "/logout";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // KALAU PAKE IIS DAN INPUTFILE, JANGAN LUPA
            app.Use((context, next) =>
            {
                context.Features.Get<IHttpMaxRequestBodySizeFeature>().MaxRequestBodySize = null;
                return next.Invoke();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                // endpoints.MapHub<ChatHub>("/chat");                                                  // SignalR Hub
                endpoints.MapBlazorHub();
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");      // Add Web API Routing
                endpoints.MapFallbackToPage("/_Host");
            });
        }
    }
}
