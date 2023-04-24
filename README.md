# Node.js 滴答清单

使用NodeJS代理滴答清单API，以JSON形式返回，可以方便部署到vercel

### 参数

|  请求参数   | 响应说明  |
|  ----  | ----  |
| url?action=list  | 返回未完成列表 |
| url?action=completed  | 返回已完成列表 |
| url?action=trash  | 返回垃圾桶列表 |

### 一键部署

环境变量：
 - USERNAME：滴答清单账号
 - PASSWORD：滴答清单密码

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/jichangee/node-dida365&env=USERNAME&env=PASSWORD&project-name=node-dida365&repository-name=node-dida365)

### 免责声明

 - 该仓库代码仅供学习交流，不可用作任何商业行为
 - 这个软件是纯粹为了学术研究的目的而创建的为有效的防御技术的发展，并不是为了用于攻击系统，除非明确授权。
 - 项目维护者对软件的滥用不承担任何责任。
