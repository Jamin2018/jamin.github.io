(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{478:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"postgres12数据库安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgres12数据库安装"}},[s._v("#")]),s._v(" postgres12数据库安装")]),s._v(" "),a("blockquote",[a("p",[s._v("环境：linux centos8")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/network-ren/p/12448929.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装POSTGRES到Centos"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("安装YUM-PostgreSQL存储库")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] yum -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm\n")])])]),s._v(" "),a("p",[s._v("安装postgreSQL")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] yum -y install postgresql12 postgresql12-server\n")])])]),a("blockquote",[a("p",[s._v("若报错，下面有报错解决办法")])]),s._v(" "),a("p",[s._v("初始化数据库")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] /usr/pgsql-12/bin/postgresql-12-setup initdb\n")])])]),a("p",[s._v("修改配置，监听所有网卡地址")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] vim /var/lib/pgsql/12/data/postgresql.conf\n\nlisten_addresses = '*'\nport = 5432\n")])])]),a("p",[s._v("添加信任网段，允许其他主机访问")]),s._v(" "),a("blockquote",[a("p",[s._v("注意这里的配置有匹配顺序，从上往下，如果上面有的规则匹配到但是不通过，则不会继续下一个验证")])]),s._v(" "),a("blockquote",[a("p",[s._v("先在尾部添加试试后重启数据库，看看能否链接")])]),s._v(" "),a("blockquote",[a("p",[s._v("若无效，则添加到头部，这样都是匹配这一条规则。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] vim /var/lib/pgsql/12/data/pg_hba.conf\n")])])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n# TYPE  DATABASE        USER            ADDRESS                 METHOD\nhost    all             all             0.0.0.0/0               md5\n# 身份验证方法(METHOD):# - md5       密码经过MD5加密后登陆到数据库，一般采用选择这种方式。\n# - password  使用明文密码登陆到数据库。\n# - trust     信任该主机，无需密码即可登陆到数据库。\n# - ident     通过读取"pg_ident.conf"文件里面具有系统用户=数据库用户的映射关系，可以使用系统用户登陆到数据库。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("启动命令")]),s._v(" "),a("blockquote",[a("p",[s._v("因为通过yum安装服务，这个服务的启动服务postgresql-12.service脚本在/usr/lib/systemd/system/postgresql-12.service")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] systemctl enable postgresql-12    // 设置开机启动\n[root@localhost ~] systemctl start postgresql-12     // 启动\n[root@localhost ~] systemctl restart postgresql-12   // 重启\n[root@localhost ~] systemctl status postgresql-12    // 查看状态\n")])])]),a("p",[a("strong",[s._v("选做：配置环境变量")])]),s._v(" "),a("p",[s._v("配置环境变量，使“psql”客户端命令可以再全局使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('[root@localhost ~] vim /etc/profile\n\n# PostgreSQL\nexport POSTGRESQL_BIN="/usr/pgsql-12/bin/"\nexport PATH=$PATH:$POSTGRESQL_BIN\n\n[root@localhost ~] source /etc/profile\n')])])]),a("p",[s._v("安装postgreSQL报错解决办法")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("报错信息:Unable to find a match: postgresql12 postgresql12-server\n\nyum -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm\n\nyum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\n\nyum -y install yum-utils\n\nyum-config-manager --enable pgdg12\n\nyum -qy module disable postgresql\n\nyum install postgresql12-server postgresql12\n")])])]),a("h1",{attrs:{id:"创建django使用的数据库-odoo也是这样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建django使用的数据库-odoo也是这样"}},[s._v("#")]),s._v(" 创建Django使用的数据库(odoo也是这样)")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("create user username with password '****’;   // 创建用户，有则不需要\ncreate database dbtest owner username;\n\ngrant all on database dbtest to username; -- 将dbtest所有权限赋值给username\n")])])]),a("p",[s._v("django默认配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[root@localhost ~] vim ../Django项目/setting.py\n")])])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DATABASES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'ENGINE': 'django.db.backends.sqlite3',")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.postgresql_psycopg2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库owner")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码owner")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("启动")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('[root@localhost ~] python3 manage.py runserver 0.0.0.0:8000\n\n报错\ndjango.db.utils.OperationalError: FATAL:  Ident authentication failed for user "root"\n\n\nlocal all postgres trust\nhost all all 127.0.0.1/32 trust\nhost all all ::1/128 trust\nlocal replication all trust\nhost replication all ::1/128 trust\n\n作者：玩互丧智\n链接：https://www.jianshu.com/p/64d3baf41bba\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n')])])]),a("p",[s._v("django数据迁移")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ python3 manage.py migrate   # 创建django的系统表结构【可以不执行这个】\n$ python3 manage.py makemigrations TestModel  # 让 Django 知道我们在我们的模型有一些变更\n$ python3 manage.py migrate TestModel   # 创建表结构")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);