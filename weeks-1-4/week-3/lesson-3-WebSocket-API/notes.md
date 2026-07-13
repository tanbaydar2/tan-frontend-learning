The IMU Data frame contains the follwing:

1. Timestamp in microseconds
2. Accelerometer data in "g", which divides into: ax, ay, az
3. Gyroscope data in radian per seconds, which divides into gx, gy, gz.
4. temperature, in degrees celcius.

Each of x, y, z represents one of three ortogonal axes fixed to the physical sensor chip. Which means that a measurement is broken into three components describing how much of that motion (linear for accel, rotational for gyro) is happening along each of those three directions.