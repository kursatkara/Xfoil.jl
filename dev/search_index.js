var documenterSearchIndex = {"docs":
[{"location":"library/#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"Pages = [\"library.md\"]\nDepth = 3","category":"page"},{"location":"library/#Public-API","page":"Library","title":"Public API","text":"","category":"section"},{"location":"library/#Inputting-Airfoil-Coordinates","page":"Library","title":"Inputting Airfoil Coordinates","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"set_coordinates\npane","category":"page"},{"location":"library/#Xfoil.set_coordinates","page":"Library","title":"Xfoil.set_coordinates","text":"set_coordinates(x, y)\n\nInput x and y airfoil coordinates into XFOIL. Coordinates must start at the trailing edge and loop counterclockwise.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.pane","page":"Library","title":"Xfoil.pane","text":"pane(; kwargs...)\n\nRun XFOIL's PANE command (Repanel the input airfoil)\n\nArguments\n\nnpan::Integer=140: Number of panel nodes\ncvpar::Float64=1.0: Panel bunching parameter\ncterat::Float64=0.15: TE/LE panel density ratio\nctrrat::Float64=0.2: Refined-area/LE panel density ratio\nxsref1::Float64=1.0: Top side refined area x/c limits\nxsref2::Float64=1.0:\nxpref1::Float64=1.0: Bottom side refined area x/c limits\nxpref2::Float64=1.0:\n\n\n\n\n\n","category":"function"},{"location":"library/#Viscous-Airfoil-Analysis","page":"Library","title":"Viscous Airfoil Analysis","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"solve_alpha\nalpha_sweep","category":"page"},{"location":"library/#Xfoil.solve_alpha","page":"Library","title":"Xfoil.solve_alpha","text":"solve_alpha(alpha, re; mach=0.0, iter=50, ncrit=9)\n\nCompute the flow solution at the specified angle of attack. Returns cl, cd, cdp, cm, and a convergence flag indicating whether the solution converged.\n\nArguments:\n\nalpha: Angle of attack (degrees)\nre: Reynolds number\nmach: Mach number\niter: Number of iterations\nncrit: turbulence level\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.alpha_sweep","page":"Library","title":"Xfoil.alpha_sweep","text":"alpha_sweep(x, y, alpha, re; kwargs...)\n\nPerform angle of attack sweep using XFOIL.  Return cl, cd, cdp, cm, converged.\n\nArguments\n\nx: Airfoil coordinates start from trailing edge looping counterclockwise\ny:\nalpha: Array of angle of attacks in degrees\nre: Reynolds number\nma: Mach number\niter=50: Maximum number of iterations for each XFOIL run\nnpan=140: Number of panels\npercussive_maintenance=true: Flag to call do_percussive_maintenance upon convergence failure\nprintdata=false: Flag to indicate whether to print data obtained from XFOIL during the solution\nzeroinit=true: Flag to indicate whether to start angle of attack sweeps from zero angle of attack\nclmaxstop=false: Stop if lift coefficient decreases twice consecutively going up\nclminstop=false: Stop if lift coefficient increases twice consecutively going down\n\n\n\n\n\n","category":"function"},{"location":"library/#Extracting-Boundary-Layer-Data","page":"Library","title":"Extracting Boundary Layer Data","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"get_xsep\nbldump","category":"page"},{"location":"library/#Xfoil.get_xsep","page":"Library","title":"Xfoil.get_xsep","text":"get_xsep()\n\nReturn x-position of the separation point closest to the trailing edge on the upper and lower airfoil surfaces. This location is defined as the point where the friction coefficient becomes negative.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.bldump","page":"Library","title":"Xfoil.bldump","text":"bldump()\n\nReturn boundary layer parameters s, x, y, ue, dstar, theta, and cf\n\n\n\n\n\n","category":"function"},{"location":"library/#Complex-Step-Version-of-XFOIL","page":"Library","title":"Complex Step Version of XFOIL","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"The complex step version of each function is denoted by appending _cs to each function name.  Note that there is no interaction between the two versions of XFOIL wrapped by this package, so if you wish to use the complex step version of the code you must append _cs to all function names.","category":"page"},{"location":"library/","page":"Library","title":"Library","text":"The following functions are available for use with the complex step version of XFOIL:","category":"page"},{"location":"library/","page":"Library","title":"Library","text":"set_coordinates_cs\npane_cs\nsolve_alpha_cs\nalpha_sweep_cs\nget_xsep_cs\nbldump_cs","category":"page"},{"location":"library/#Xfoil.set_coordinates_cs","page":"Library","title":"Xfoil.set_coordinates_cs","text":"set_coordinates_cs(x, y)\n\nset_coordinates for complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.pane_cs","page":"Library","title":"Xfoil.pane_cs","text":"pane_cs(; kwargs...)\n\npane for complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.solve_alpha_cs","page":"Library","title":"Xfoil.solve_alpha_cs","text":"solve_alpha_cs(alpha, re; mach=0.0, iter=50, ncrit=9)\n\nsolve_alpha for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.alpha_sweep_cs","page":"Library","title":"Xfoil.alpha_sweep_cs","text":"alpha_sweep_cs(x, y, alpha, re; kwargs...)\n\nalpha_sweep for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.get_xsep_cs","page":"Library","title":"Xfoil.get_xsep_cs","text":"get_xsep_cs()\n\nget_xsep for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.bldump_cs","page":"Library","title":"Xfoil.bldump_cs","text":"bldump_cs()\n\nbldump for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Private-API","page":"Library","title":"Private API","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"Xfoil.XfoilGlobals\nXfoil.get_globals\nXfoil.get_globals_cs\nXfoil.do_percussive_maintenance\nXfoil.do_percussive_maintenance_cs","category":"page"},{"location":"library/#Xfoil.XfoilGlobals","page":"Library","title":"Xfoil.XfoilGlobals","text":"XfoilGlobals\n\nHolds XFOIL global variables\n\n\n\n\n\n","category":"type"},{"location":"library/#Xfoil.get_globals","page":"Library","title":"Xfoil.get_globals","text":"get_globals()\n\nWraps the global variables in XFOIL in a struct\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.get_globals_cs","page":"Library","title":"Xfoil.get_globals_cs","text":"get_globals_cs()\n\nget_globals for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.do_percussive_maintenance","page":"Library","title":"Xfoil.do_percussive_maintenance","text":"do_percussive_maintenance(x, y, alpha, re, iter, npan, ncrit)\n\nAttempts to converge previously unconverged XFOIL solutions by perturbing the starting point for the XFOIL solve. Returns cl, cd, cdp, cm, converged\n\n\n\n\n\n","category":"function"},{"location":"library/#Xfoil.do_percussive_maintenance_cs","page":"Library","title":"Xfoil.do_percussive_maintenance_cs","text":"do_percussive_maintenance_cs(x, y, alpha, re, iter, npan, ncrit)\n\ndo_percussive_maintenance for the complex step enabled version of XFOIL.\n\n\n\n\n\n","category":"function"},{"location":"library/#Index","page":"Library","title":"Index","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"These examples show how to use Xfoil.jl.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Pages = [\"examples.md\"]\nDepth = 3","category":"page"},{"location":"examples/#Manual-Angle-of-Attack-Sweep","page":"Examples","title":"Manual Angle of Attack Sweep","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"This first example shows how to manually perform an angle of attack sweep.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Xfoil, Printf\n\n# read airfoil into XFOIL\nopen(\"naca2412.dat\", \"r\") do f\n    x = Float64[]\n    y = Float64[]\n    for line in eachline(f)\n        entries = split(chomp(line))\n        push!(x, parse(Float64, entries[1]))\n        push!(y, parse(Float64, entries[2]))\n    end\n    Xfoil.set_coordinates(x,y)\nend\n\n# repanel using XFOIL's `PANE` command\nXfoil.pane()\n\n# set operating conditions\nalpha = -10:1:10\nre = 1e5\nmach = 0.0\n\n# initialize outputs\nn_a = length(alpha)\nc_l = zeros(n_a)\nc_d = zeros(n_a)\nc_dp = zeros(n_a)\nc_m = zeros(n_a)\nconverged = zeros(Bool, n_a)\nfor i = 1:n_a\n    c_l[i], c_d[i], c_dp[i], c_m[i], converged[i] = Xfoil.solve_alpha(alpha[i], re; mach, iter=100)\nend\n\n# print results\nprintln(\"Angle\\t\\tCl\\t\\tCd\\t\\tCm\\t\\tConverged\")\nfor i = 1:n_a\n  @printf(\"%8f\\t%8f\\t%8f\\t%8f\\t%d\\n\",alpha[i],c_l[i],c_d[i],c_m[i],converged[i])\nend\n\nnothing #hide","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Suppose we want to find the derivative of c_l, c_d, and c_m with respect to alpha at the same angles of attack.  One approach to calculate these derivatives would be to use the finite difference method.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Xfoil, Printf\n\n# read airfoil into XFOIL\nopen(\"naca2412.dat\", \"r\") do f\n    x = Float64[]\n    y = Float64[]\n    for line in eachline(f)\n        entries = split(chomp(line))\n        push!(x, parse(Float64, entries[1]))\n        push!(y, parse(Float64, entries[2]))\n    end\n    Xfoil.set_coordinates(x,y)\nend\n\n# repanel using XFOIL's `PANE` command\nXfoil.pane()\n\n# set operating conditions\nalpha = -10:1:10\nre = 1e5\nmach = 0.0\n\n# set step size\nh = 1e-6\n\n# initialize outputs\nn_a = length(alpha)\nc_l_a = zeros(n_a)\nc_d_a = zeros(n_a)\nc_dp_a = zeros(n_a)\nc_m_a = zeros(n_a)\nconverged = zeros(Bool, n_a)\n\nfor i = 1:n_a\n    c_l1, c_d1, c_dp1, c_m1, converged[i] = Xfoil.solve_alpha(alpha[i], re; mach, iter=100)\n    c_l2, c_d2, c_dp2, c_m2, converged[i] = Xfoil.solve_alpha(alpha[i]+h, re; mach, iter=100)\n    c_l_a[i] = (c_l2 - c_l1)/h * 180/pi\n    c_d_a[i] = (c_d2 - c_d1)/h * 180/pi\n    c_m_a[i] = (c_m2 - c_m1)/h * 180/pi\nend\n\n# print results\nprintln(\"Angle\\t\\tdClda\\t\\tdCdda\\t\\tdCmda\\t\\tConverged\")\nfor i = 1:n_a\n  @printf(\"%8f\\t%8f\\t%8f\\t%8f\\t%d\\n\",alpha[i],c_l_a[i],c_d_a[i],c_m_a[i],converged[i])\nend\n\nnothing #hide","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"A better approach might be to use the complex step method.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Xfoil, Printf\n\n# read airfoil into XFOIL\nopen(\"naca2412.dat\", \"r\") do f\n    x = Float64[]\n    y = Float64[]\n    for line in eachline(f)\n        entries = split(chomp(line))\n        push!(x, parse(Float64, entries[1]))\n        push!(y, parse(Float64, entries[2]))\n    end\n    Xfoil.set_coordinates_cs(x,y)\nend\n\n# repanel using XFOIL's `PANE` command\nXfoil.pane_cs()\n\n# set operating conditions\nalpha = -10:1:10\nre = 1e5\nmach = 0.0\n\n# set step size\nh = 1e-20im\n\n# initialize outputs\nn_a = length(alpha)\nc_l_a = zeros(n_a)\nc_d_a = zeros(n_a)\nc_dp_a = zeros(n_a)\nc_m_a = zeros(n_a)\nconverged = zeros(Bool, n_a)\n\nfor i = 1:n_a\n    c_l, c_d, c_dp, c_m, converged[i] = Xfoil.solve_alpha_cs(alpha[i]+h, re; mach, iter=100)\n    c_l_a[i] = imag(c_l)/imag(h) * 180/pi\n    c_d_a[i] = imag(c_d)/imag(h) * 180/pi\n    c_m_a[i] = imag(c_m)/imag(h) * 180/pi\nend\n\n# print results\nprintln(\"Angle\\t\\tdClda\\t\\tdCdda\\t\\tdCmda\\t\\tConverged\")\nfor i = 1:n_a\n  @printf(\"%8f\\t%8f\\t%8f\\t%8f\\t%d\\n\",alpha[i],c_l_a[i],c_d_a[i],c_m_a[i],converged[i])\nend\n\nnothing #hide","category":"page"},{"location":"examples/#Automatic-Angle-of-Attack-Sweep","page":"Examples","title":"Automatic Angle of Attack Sweep","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"For performing angle of attack sweeps, the function alpha_sweep may also be used.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Xfoil, Printf\n\n# extract geometry\nx = Float64[]\ny = Float64[]\n\nf = open(\"naca2412.dat\", \"r\")\n\nfor line in eachline(f)\n    entries = split(chomp(line))\n    push!(x, parse(Float64, entries[1]))\n    push!(y, parse(Float64, entries[2]))\nend\n\nclose(f)\n\n# set operating conditions\nalpha = -10:1:10\nre = 1e5\n\nc_l, c_d, c_dp, c_m, converged = Xfoil.alpha_sweep(x, y, alpha, re, iter=100, zeroinit=false, printdata=true)\n\nnothing #hide","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"A version of alpha_sweep has also been implemented for use with the complex step version of XFOIL.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using Xfoil, Printf\n\n# extract geometry\nx = Float64[]\ny = Float64[]\n\nf = open(\"naca2412.dat\", \"r\")\n\nfor line in eachline(f)\n    entries = split(chomp(line))\n    push!(x, parse(Float64, entries[1]))\n    push!(y, parse(Float64, entries[2]))\nend\n\nclose(f)\n\n# set operating conditions\nalpha = -10:1:10\nre = 1e5\nmach = 0.0\n\n# set step size\nh = 1e-20im\n\nc_l, c_d, c_dp, c_m, converged = Xfoil.alpha_sweep_cs(x, y, alpha .+ h,\n    re, mach=mach, iter=100, zeroinit=false, printdata=true)\n\nprintln(\"Angle\\t\\tdClda\\t\\tdCdda\\t\\tdCmda\\t\\tConverged\")\nfor i = 1:length(alpha)\n    @printf(\"%8f\\t%8f\\t%8f\\t%8f\\t%d\\n\", alpha[i], imag(c_l[i])/imag(h)*180/pi, imag(c_d[i])/imag(h)*180/pi, imag(c_m[i])/imag(h)*180/pi, converged[i])\nend\n\nnothing #hide","category":"page"},{"location":"#Xfoil.jl","page":"Home","title":"Xfoil.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"Julia Wrapper for a Simplified Version of XFOIL","category":"page"},{"location":"","page":"Home","title":"Home","text":"Author: Taylor McDonnell","category":"page"},{"location":"","page":"Home","title":"Home","text":"Xfoil.jl is a Julia wrapper for a simplified version of Mark Drela's 2D airfoil panel code, XFOIL.  ","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package was originally a fork of the pyXLIGHT, but has since undergone some development to introduce new features.  The version of XFOIL that this package wraps is that of the xfoil_light project.","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Can handle any airfoil XFOIL can handle\nIs able to redistribute panels over the surface of an airfoil using XFOIL's PANE command.\nAble to perform viscous airfoil analysis using XFOIL.\nComplex step method can be used to obtain gradients.","category":"page"},{"location":"#Obtaining-Gradients-using-the-Complex-Step-Method","page":"Home","title":"Obtaining Gradients using the Complex Step Method","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This code actually wraps two versions of Mark Drela's XFOIL code, one of which may be used to compute gradients using the complex step method.  The complex step enabled version of XFOIL may be called through using functions that end with _cs.  Note that there is no interaction between the two versions of XFOIL wrapped by this package, so if you wish to use the complex step version of the code you must use the functions that end with _cs.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Enter the package manager by typing ] and then run the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add Xfoil","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See the examples","category":"page"},{"location":"#Development","page":"Home","title":"Development","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pull requests for this package or its companion package xfoil_light are always welcome.","category":"page"}]
}