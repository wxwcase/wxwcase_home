using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(weiwang_home.Startup))]
namespace weiwang_home
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
